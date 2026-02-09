"use client";

import {
  useEffect,
  useState,
  useRef,
  memo,
  Dispatch,
  SetStateAction,
} from "react";
import type { QuestionType } from "./Screen";

function Chat({
  question,
  questionList,
  setWaitingQueue,
}: {
  question: number | null;
  questionList: QuestionType[];
  setWaitingQueue: Dispatch<SetStateAction<1 | 0>>;
}) {
  const chatListRef = useRef<null | HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ id: number; timestamp: string }[]>(
    []
  );
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    setMessages([
      {
        id: 0,
        timestamp: new Date().toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  useEffect(() => {
    if (question != null) {
    let len = questionList.find((v) => v.id == question)?.answer.length as number
      setWaitingQueue(1);
      setIsTyping(true);
      const newMessage = {
        id: question,
        timestamp: new Date().toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setTimeout(() => {
        setIsTyping(false);
        setWaitingQueue(0);
      }, clamp(len * 13, 800, 1500));

      setTimeout(()=>{
        const chatEl = chatListRef.current;
        if (!chatEl) return;
        chatEl.scrollTo({
          top: chatEl.scrollHeight,
          behavior: "smooth",
        });
      }, clamp(len * 13, 800, 1500) + 10);
    }
  }, [question]);

  useEffect(() => {
    const chatEl = chatListRef.current;
    if (!chatEl) return;
    chatEl.scrollTo({
      top: chatEl.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const renderedMessages = messages
    .map((msg, index) => {
      if (msg.id === 0) {
        return {
          key: `${msg.id}-${index}`,
          userText: "سلام وقتتون بخیر یک سوال داشتم",
          botText: "وقتتون بخیر بفرمایید",
          timestamp: msg.timestamp,
        };
      }

      const item = questionList.find((v) => v.id == msg.id);
      if (!item) return null;

      return {
        key: `${msg.id}-${index}`,
        userText: item.text,
        botText: item.answer,
        timestamp: msg.timestamp,
      };
    })
    .filter((item) => item != null);

  return (
    <div
      ref={chatListRef}
      id="chat"
      className="h-full w-full flex flex-col gap-3 p-2 px-4 overflow-auto"
    >
      {messages.length <= 1 && (
        <div className="flex justify-center my-1">
          <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm">
            روی یکی از سوالات زیر کلیک کنید
          </div>
        </div>
      )}

      {renderedMessages.map((msg) => (
        <div className="flex flex-col gap-1" key={msg.key}>
          <Message
            text={msg.userText}
            admin={false}
            timestamp={msg.timestamp}
          />
          {isTyping &&
          renderedMessages[renderedMessages.length - 1]?.key === msg.key ? (
            <Message
              text="درحال تایپ..."
              admin={true}
              timestamp={msg.timestamp}
            />
          ) : (
            <Message
              text={msg.botText}
              admin={true}
              timestamp={msg.timestamp}
            />
          )}
        </div>
      ))}
    </div>
  );
}

const Message = memo(
  ({
    text,
    admin,
    timestamp,
  }: {
    text: string;
    admin: boolean;
    timestamp: string;
  }) => {
    return (
      <div
        className="flex items-start gap-3"
        style={{ justifyContent: admin ? "flex-start" : "flex-end" }}
      >
        <span
          className={`text-xs text-gray-500 whitespace-nowrap mt-1 ${
            !admin ? "hidden" : ""
          }`}
        >
          {timestamp}
        </span>
        <div
          style={{ background: admin ? "#F0ECF4" : "#C3B6D5" }}
          className="rounded-sm px-3 py-2 max-w-[80%] wrap-break-word shadow-sm"
        >
          {text}
        </div>
        <span
          className={`text-xs text-gray-500 whitespace-nowrap mt-1 ${
            admin ? "hidden" : ""
          }`}
        >
          {timestamp}
        </span>
      </div>
    );
  }
);

function clamp(value: number, min: number, max: number) : number {
    return Math.max(min, Math.min(value, max));
}

export default Chat;
