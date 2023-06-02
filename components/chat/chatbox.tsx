"use client";

import Image from "next/image";
import React, { use, useEffect, useRef } from "react";

import { info } from "@/constants/site";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import useSWR from "swr";

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const botId = process.env.NEXT_PUBLIC_BOTID;

const Chatbox = () => {
  const [content, setContent] = React.useState("");
  const [messages, setMessages] = React.useState<any>([]);
  const [uuid, setUuid] = React.useState(
    `${Math.random().toString(36).substring(2, 15)}`
  );
  const [userMessages, setUserMessages] = React.useState([]);
  const [chatId, setChatId] = React.useState("");
  const { toast } = useToast();

  useEffect(() => {
    const chatId = localStorage.getItem("chat_sc");
    if (chatId) {
      setChatId(chatId);
    }
  }, [userMessages]);

  const { data, mutate } = useSWR(
    chatId ? `/api/chat?block_id=${chatId}` : null,
    fetcher,
    {
      refreshInterval: 10000,
    }
  );

  useEffect(() => {
    if (data) {
      // @ts-ignore
      const _messages = data.results.map((message) => {
        if (message.created_by.id === botId) {
          return { ...message, userType: "bot" };
        } else {
          return { ...message, userType: "user" };
        }
      });
      setMessages(_messages);
    }
  }, [data]);

  // create unique uuid for each user using Math random and Date.now
  useEffect(() => {
    const uuid = localStorage.getItem("uuid_sc");
    if (!uuid) {
      const _uuid = `${Math.random().toString(36).substring(2, 15)}`;
      setUuid(_uuid);
      localStorage.setItem("uuid_sc", _uuid);
    } else {
      setUuid(uuid);
    }
  }, []);

  //   Conditionally render chatbox
  const handleSendMessage = async () => {
    const chatId = localStorage.getItem("chat_sc");
    if (!chatId) {
      await createSession();
    } else {
      await sendMessage(chatId);
    }
  };

  //   Send message to database
  //   @ts-ignore
  const sendMessage = async (_chatId) => {
    const sendMessage = await fetch("/api/chat/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: _chatId,
        message: content,
      }),
    });

    if (sendMessage.ok) {
      const sendMessageJson = await sendMessage.json();
      const messageId = sendMessageJson.id;
      setUserMessages(messageId);
      setContent("");
      mutate();
    }
  };

  //   Create session and send message
  const createSession = async () => {
    const createSession = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        databaseId: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
        sessionId: uuid,
      }),
    });

    if (createSession.ok) {
      const createSessionJson = await createSession.json();
      const chatId = createSessionJson.id;
      localStorage.setItem("chat_sc", chatId);
      await sendMessage(chatId);
      mutate();
      toast({
        title: "Session Created",
      });
    }
  };

  return (
    <div>
      <div className="mt-8 max-w-sm mx-auto relative group px-2">
        <ScrollArea
          className={`${
            messages.length > 0 ? "h-72" : "h-0"
          } transition-transform duration-500 max-w-xl rounded-md border`}
        >
          <div className="p-4">
            {messages.map((message: any) => (
              <div key={message.id} className="my-4">
                <p
                  className={
                    message?.userType === "user"
                      ? "text-left text-orange-600"
                      : "text-right text-purple-600"
                  }
                >
                  {message?.userType === "user" ? "Shubham" : "You"}
                </p>
                <div
                  className={`${
                    message?.userType === "user" ? "mr-auto" : "ml-auto"
                  } w-max`}
                >
                  <p
                    className={`px-4 py-2 text-left max-w-xs rounded-md bg-secondary`}
                    key={message.id}
                  >
                    {message?.rich_text[0]?.plain_text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex mt-4">
          <Input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className=""
            name="note"
            placeholder={`Hi ${info.name.split(" ")[0]}, this is ...`}
          />
          <Button
            data-umami-event="send-message"
            disabled={content.length === 0}
            className="ml-4"
            onClick={handleSendMessage}
          >
            Send{" "}
            <Icons.send className="w-4 h-4 ml-4 transition-transform group-hover:rotate-45" />
          </Button>
        </div>
        <p className="absolute -bottom-16 sm:-left-40 -left-16 rotate-3 font-serif transition-transform group-hover:text-pink-500 group-hover:rotate-12">
          Send me a direct message
        </p>
      </div>
    </div>
  );
};

export default Chatbox;
