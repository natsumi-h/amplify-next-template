"use server";

export async function getTodos() {
  return [
    {
      id: "1",
      content: "Hello World",
    },
    {
      id: "2",
      content: "Hello World",
    },
  ];
}
