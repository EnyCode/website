export async function onRequestPost(context) {
  let body = context.request.body;
  let { id, email, tags } = body;
  console.log(context.request);
  const contact = await context.env.BLOG_DATA.get(id, { type: "json" });
  if (email == undefined && id == undefined) {
    return new Response("error - no email or id provided", { status: 400 });
  }
  if (id == undefined && email != undefined && task == undefined) {
    await context.env.BLOG_DATA.put(Math.floor(Math.random() * 10000000000000000), JSON.stringify({ email: email, tags: tags }));
    return new Response("success");
  }
  if (contact == undefined) {
    return new Response("error - couldn't find contact to update", { status: 400 });
  }
  await context.env.BLOG_DATA.put(id, JSON.stringify({ email: contact.email, tags: tags }));

  return new Response("success");
}

export async function onRequestGet(context) {
  let body = context.request.body;
  let { id, tags } = body;
  if (id == undefined) {
    return new Response("error - no id provided", { status: 400 });
  }
  const contact = await context.env.BLOG_DATA.get(id, { type: "json" });
  if (contact == undefined) {
    return new Response("error - couldn't find contact", { status: 400 });
  }
  return new Response(JSON.stringify({ email: contact.email, tags: contact.tags }));
}