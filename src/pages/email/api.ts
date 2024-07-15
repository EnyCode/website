import { APIRoute } from "astro";
import * as fs from "fs";

const fileName = "./contacts.json";

fs.writeFile(fileName, "[]", { flag: 'wx' }, function (err) {});

const contacts = require(fileName);

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();

    const email: string = body.email;
    const tags: string[] = body.tags;

    contacts.push({
      email: email,
      tags: tags
    });

    fs.writeFile(fileName, JSON.stringify(contacts), function writeJSON(err) {
      if (err) return console.log(err);
    });

    return new Response(JSON.stringify({
      message: "email: " + email,
      message_two: tags
    }), {
      status: 200
    })
  }
  return new Response(null, { status: 400 });
}