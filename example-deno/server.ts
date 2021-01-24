import { Application } from "https://deno.land/x/oak/mod.ts";
import { bold, yellow } from "https://deno.land/std@0.84.0/fmt/colors.ts";

const app = new Application();

app.use((ctx) => {
    ctx.response.body = "Hello World!";
});

app.addEventListener("listen", ({ hostname, port }) => {
    console.log(
        bold("Start listening on ") + yellow(`${hostname}:${port}`),
    );
});

await app.listen({ hostname: "127.0.0.1", port: 3000  });
console.log(bold("Finished."));
