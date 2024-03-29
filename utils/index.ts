import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constant";

export function getRandomPrompt(prompt: string): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id: number, photo: string | Blob) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
