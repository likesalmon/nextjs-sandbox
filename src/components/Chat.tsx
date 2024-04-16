"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Robot, User } from "@phosphor-icons/react";
import { Message as TMessage, useChat } from "ai/react";
import * as date from "date-fns";

function Message({ message }: { message: TMessage }) {
  return (
    <div
      className={cn(
        "flex gap-4 items-start",
        message.role === "user"
          ? "justify-end flex-row-reverse"
          : "justify-start",
      )}
    >
      <div
        className={`rounded-full bg-gray-100 dark:bg-gray-800 p-4 max-w-[75%]`}
      >
        {message.role === "user" ? <User size="28" /> : <Robot size={28} />}
      </div>
      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 max-w-[75%]">
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        {message.createdAt && (
          <time className="block text-xs text-gray-500 dark:text-gray-400 mt-2">
            {date.format(message.createdAt, "HH:mm")}
          </time>
        )}
      </div>
    </div>
  );
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="rounded-lg border shadow-sm">
        <div className="border-b p-4 space-y-1">
          <h1 className="text-lg font-bold">Chat</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Chat with our AI-powered chatbot
          </p>
        </div>

        <ScrollArea className="h-96 w-full">
          <div className="flex-col gap-8 flex">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Label className="sr-only" htmlFor="message">
              Message
            </Label>

            <Input
              id="message"
              placeholder="Type your message"
              value={input}
              onChange={handleInputChange}
            />

            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
