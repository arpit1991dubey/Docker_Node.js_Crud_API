# Node.js_Crud_API

## What is Node.js and why was it made ?
In one sentence: Node.js shines in real-time web applications employing push technology over websockets. What is so revolutionary about that? Well, after over 20 years of stateless-web based on the stateless request-response paradigm, we finally have web applications with real-time, two-way connections, where both the client and server can initiate communication, allowing them to exchange data freely. This is in stark contrast to the typical web response paradigm, where the client always initiates communication. Additionally, it’s all based on the open web stack (HTML, CSS and JS) running over the standard port 80.

One might argue that we’ve had this for years in the form of Flash and Java Applets—but in reality, those were just sandboxed environments using the web as a transport protocol to be delivered to the client. Plus, they were run in isolation and often operated over non-standard ports, which may have required extra permissions and such.

With all of its advantages, Node.js now plays a critical role in the technology stack of many high-profile companies who depend on its unique benefits. The Node.js Foundation has consolidated all the best thinking around why enterprises should consider Node.js in a short presentation that can be found on the Node.js Foundation’s Case Studies page.

In this Node.js guide, I’ll discuss not only how these advantages are accomplished, but also why you might want to use Node.js—and why not—using some of the classic web application models as examples.
How Does It Work?

The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.

That’s a mouthful.
What it really means is that Node.js is not a silver-bullet new platform that will dominate the web development world. Instead, it’s a platform that fills a particular need.

What it really means is that Node.js is not a silver-bullet new platform that will dominate the web development world. Instead, it’s a platform that fills a particular need. And understanding this is absolutely essential. You definitely don’t want to use Node.js for CPU-intensive operations; in fact, using it for heavy computation will annul nearly all of its advantages. Where Node really shines is in building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections with high throughput, which equates to high scalability.

How it works under-the-hood is pretty interesting. Compared to traditional web-serving techniques where each connection (request) spawns a new thread, taking up system RAM and eventually maxing-out at the amount of RAM available, Node.js operates on a single-thread, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections held in the event loop.

Diagram of traditional vs. Node.js server thread

A quick calculation: assuming that each thread potentially has an accompanying 2 MB of memory with it, running on a system with 8 GB of RAM puts us at a theoretical maximum of 4,000 concurrent connections (calculations taken from Michael Abernethy’s article “Just what is Node.js?”, published on IBM developerWorks in 2011; unfortunately, the article is not available anymore), plus the cost of context-switching between threads. That’s the scenario you typically deal with in traditional web-serving techniques. By avoiding all that, Node.js achieves scalability levels of over 1M concurrent connections, and over 600k concurrent websockets connections.

There is, of course, the question of sharing a single thread between all clients requests, and it is a potential pitfall of writing Node.js applications. Firstly, heavy computation could choke up Node’s single thread and cause problems for all clients (more on this later) as incoming requests would be blocked until said computation was completed. Secondly, developers need to be really careful not to allow an exception bubbling up to the core (topmost) Node.js event loop, which will cause the Node.js instance to terminate (effectively crashing the program).

The technique used to avoid exceptions bubbling up to the surface is passing errors back to the caller as callback parameters (instead of throwing them, like in other environments). Even if some unhandled exception manages to bubble up, tools have been developed to monitor the Node.js process and perform the necessary recovery of a crashed instance (although you probably won’t be able to recover the current state of the user session), the most common being the Forever module, or using a different approach with external system tools upstart and monit, or even just upstart.
