## Lecture 1, 2 - 

### Why should we learn Networking -

Basic or foundational knowledge of networking is so beneficial when we make networking applications using Node.js, C, or C++. 

Having a foundational knowledge of Networking provides so many benefits while making networking heavy backend or full-stack applications. 

#### Advantages of knowing Networking - 

- **Scalable interaction between client and server and improved API performance**

- **Easily troubleshoot networking issues**

- **Implement security in networking**

- **Easily scale applications**

- **Streamlining the deployment process**

---

### What is Networking -

Computer networking in computer science is a practice of connecting two or more devices to each other to share data and hardware resources And communication services. 

Core components of a computer which are used in networking are:
- nodes (devices)
- hardware components
- transmission components
- transfer protocol.

There are various types of networking, such as 
- LAN
- WAN
- MAN/PAN/VPN. 

Common architectures used in networking are -
- client-server architecture
- peer-to-peer connecting architecture.

---

## Lecture 6, 7 - 

### Important Networking Devices -  
- **Hosts** -  
Any device connected to a wireless or physical network is ultimately a host. They are simply the devices which can consume or produce data. Common examples are computers, laptops, tablets, PC, mobiles, printers, etc. 

- **Repeaters** -   
Repeaters are simple devices which have two ports to connect two different devices. They can accept electrical signals and they can overcome the issue of degradation of signals. They can decode any electric or wired signal, bit by bit, and enhance them to their original strength, extending the physical length of data. 

- **Hubs** - 
A hub is a multi port device used to connect two or more devices to each other for Creating a LAN network. They are considered "dumb" network transfer devices because when they receive signals from device, they just mindlessly broadcast the received data to all connected devices, wasting the Network calls and creating security flaws.

- **Switches** -  
A smart alternative to hubs, which can connect two or more devices in a LAN network, is comparatively smarter than hubs because they read the MAC address and network signals. They only transmit that data to an intended device, making the network call more private and fast. 

- **Bridge** -  
A bridge is a two-port device which is used to segment two LAN networks. It can read and analyze the MAC address of every network request to keep the connected networks private and fast. It prevents the unnecessary data from flooding the entire network. 

- **Routers** - 
Routes are the complete backbone of modern-day internet workflows. They can direct data packets so they can travel smartly and fast. They work with IP addresses to read network tables and they decide on a smart and fast way for data to travel at a blazing fast speed Complete wirelessly.

- **Modem** -
A modem is a device that bridges our home equipment with a network provider with the help of wires. 
It reads the incoming network calls from the network provider and converts them into analog network signals so they can travel through our home equipments such as phone lines, wireless devices, and fiber optic cables. 

- **Access points** -
Access points are the devices which add wireless capabilities to our LAN networks. 
It connects networking devices, such as routers or switches, with the help of cables and broadcasts Wi-Fi signals, allowing wireless devices to use LAN networks. 

---

### Types Of Network

- **PAN (personal area network)** - 
A network with connected devices like phones, microphones, Bluetooth earbuds, tablets, PCs, or mobile devices. Typical range is around 5 to 10 m. 

- **LAN (local area network)** - 
In a high-speed network which connects the devices in a limited single-site area like a home, hospital, office buildings, or rooms Using Wi-Fi or Ethernet cables.

- **MAN (Metropolitan Area Network)** - 
A network which operates on a metropolitan area, segmenting multiple LANs together to grasp major areas like states, and cities. (typical ranges around 5 to 50 km).

- **WAN (wide area network)** - 
A large-scale network spanning major geographical areas using multiple LANs and MANs. It covers major examples like cities, states, countries, even the globe, while the internet is a good example of a WAN network. 

- **VPN (private virtual network)** - 
A secure private network which is built on a public network and which allows remote users or branch offices to access a private network.

---

## Lecture 8, 9 - Practical on LAN and WAN -  

#### LAN Connection - 
- Connected laptop, tablet and mobile phone to a Same WI-FI network (Router/mobile Hotspot).
- Started live server form a folder in the laptop
- The router assigned same IP address to all connected devices 
- laptop stared the server on (127.0.0/localhost) and Started the same server on the IP address which is given by the router
- all connected devices has the same IP address, so any device can access the live server stared by the laptop
- all other device has the access of the folder in which the live server has Started by the laptop, all devices can browse files, images, videos in that served folder

#### this is how we created a LAN network Practically

---

#### WAN Connection - 

- connected a laptop with a router
- then connected another laptop with second router
- we have to different LAN networks 
- then Connected other routers with LAN to WAN connectors as a one way communication. (LAN device can access the resources of WAN device but WAN cannot access the resources of LAN device)
- by doing this, the router who Connected with LAN has internet(WAN) as the router who  is providing WAN Connection. 
- the WAN connector router will assign the IP address to all Connected devices.

#### this is how WAN network Practically

---

## Lecture 11 -

#### How mobile internet works - 

- When we on the data of our mobile, whichever company's or network provider's SIM (Subscriber Identity Module) we are using, that SIM or our mobile will try to connect with the same network provider's network tower in our area (in the range of typically 15 to 20 km).  

- After connecting with the corresponding network tower, the network tower will send electromagnetic signals to our SIM and it will check for some important credentials, like our recharge expiry, customer identity, and whether the user is allowed to use the internet or not.

- The credential verifications and user authentication and authorization are handled by the servers and technical offices behind the towers. The towers and technical offices are connected with long distributed underground fiber optic cables, which are responsible for traveling the internet over very long distances. 

- After connecting the SIM card and mobile tower and after checking for all the credentials and authorizations, The technical offices and server Inside technical offices of network providers will assign a unique IP address to a mobile device. With that private, unique IP address, we can access the internet with the help of browsers and network applications. 

#### This is how mobile internet works in day-to-day information sharing tasks.

---

## Lecture 12 - `IP Address` and `Subnet Mask`

### Learned about - 

- **IP Address** -   
An IP address is a decimal representation of a 32-bit or 4-byte binary number. It is assigned by a network provider device (such as a router or even network signal towers) to any network consumer devices (such as a PC, mobile, laptops, or a tablet). 
When a binary IP address is displayed as a decimal number, each byte is separated with a dot.

- **Subnet Mask** -   
Subnet masks act as a template for devices to tell which part of an IP address represents the network and which part of that same IP address represents the host. The first 12 bytes of an IP address subnet mask are often a sequence of repeated ones. When we convert that binary number into a decimal, it gets converted into `255.255.255.0`. 
In modern devices, this subnet mask can be displayed as `/24` to tell the device the first 12 bytes are locked as one. this This process of showing a subnet mask as `/24` is called **CIDR notation**. 

- **Network portion and Host portion** -  
 When the subnet mask is 255.255.255.0, it means the first 3 bytes of the subnet mask (the first 9 digits of an IP address) represent the network. The remaining last byte, or the remaining number separated by a dot, represents the host, which is a device consuming the network. 

- **Max Numbers of IP Address** -
An IPv4 address is made of a 32-bit binary number. It means the maximum number of IPv4 addresses can exist is **4,29,49,67,295** (4.29 billion approx). In the modern-day IP address mechanism, IPv6 addresses exist to cross that range and it provides network user devices to have more than 4.29 billion IP addresses. 

- **Loop back address (LocalHost)** -
In the early days of the invention of IP addresses and the IP protocol, The creators of the IP protocol, reserved a range of IP addresses from 127.0.0.0 to 127.255.255.255 for **loopback addresses (localhost).**   
When we start localhost server from any device, the localhost server can have the address from 127.0.0.1 to 127.0.0.255 While the first address, 127.0.0.1, and the last address, 127.0.0.255, are being reserved for the network.

---

## Lecture 13, 14, 15 - Dynamic, static, private, and public IP addresses 

- **Static IP addresses** -   
Static IP addresses can be assigned or logged up by the administrator or ISP (internet service providers).   
They come, sometimes, to own a static IP address. They need to charge a fixed fee, which is charged by internet service providers or network providers. It is commonly used by public servers, email services, VPNs, or remote offices who need a consistent IP address to manage their online assets. It is risky to manage in the long term because the attackers can target our specific static IP address. The static IP addresses cannot be moved or changed in the long period of time.

- **Dynamic IP addresses** -    
Dynamic IP addresses automatically assigned by routers or the DHCP servers (Dynamic Host Configuration Protocol). Dynamic IP addresses are usually free of cost because they come with ordinary internet packages provided by internet providers. It often used for day-to-day internet usage for devices like PC, laptop, and smartphones. Dynamic IP addresses are unreliable because they often change when the internet connection connects or disconnects, making it risky to run public servers or development assets on the IP addresses. 

- **Public IP addresses** - 
The public IP addresses are globally unique addresses of a network, which are provided and assigned by the global-level internet service provider. Public IP addresses lets our home devices, such as PCs or laptops, connect with the global-level internet. 

- **Private IP addresses** - 
Private IP addresses are the IPs which are assigned by a local internet provider (devices such as routers or Wi-Fi connections) so they can identify our devices Like PC, smartphone, and smart TVs. strictly in LAN (local area) networks. 

---

## Lecture 19 - Understanding Domain name system

DNS (Domain name system) is the "Phone book or Contacts List" for browsers. it lets the user type human readable name of sites like `www.google.com` or `www.youtube.com`, then the browsers will translate that Domain name in Numeric IP address like `127.2.0.16` for computers to connect with each other.

### Components of a Domain Name - 

- **Root level Domain (RLD)** -   
A root-level domain is an unnamed dot, which is automatically assigned by the browser at the end of every domain name. The user doesn't explicitly need to add that dot at the end of any domain name. 

- **Top level Domain (TLD)** - 
Its the extension at the rightmost part of every domain name, like - `.com`, `.gov`, `.org`, `.net`.

- **Second level Domain (SLD)** -  
The main name of a domain registered by an authority or an organization. Directly located at the right side of **TLD**. Common examples are `.google`, `.youtube`, `.amazon`. 

- **Subdomain** - 
A subdomain is an optional section at the very start of any domain name, which represents a server or a section in a domain name. for example - www.app.procoddr.com; - `www`, `app` are subdomains in the domain name.

---

## Lecture 21 - How DNS works

DNS works as a phone book for internet which let the users type the human readable text to look for a website, and the browser converts it in to numeric IP address to connect our computer with the site's underlying server.

#### This is how DNS works step by step - 

- **browser query cache check** -  
first the browser checks for it cache storage for recently visited IP addresses and if it finds one it will return it with the site connected to it.

- **Os query cache check** -  
If the browser didn't found any IP address in his cache storage, it will as the Operating system for it's cache of IP addresses. if it finds one it will return it with the site connected to it.  

- **Recursive DNS resolver query** -
if IP address is not found in the first 2 cache search steps, the the browser first connects the **IPS(Internet service provider)** server in the search of the nearest Root servers.

- **Root DNS server query** -
The Root DNS servers sits at the top of DNS server hierarchy. there are 13 logical root server networks worldwide. they do not directly know for which specific IP address we are looking for. they just redirect the query to the corresponding **TDL Nameserver**. 

- **TDL server query (lookup for specific TLDs like .com, .org etc)** -
TDL  Nameservers are responsible for classifications of top level domain names like `.com`, `.in`, `.org`. they didn't directly know IP address, but the redirect the query to a final **Authoritative Nameserver**

- **Authoritative nameserver query** -  
in the last step the DNS resolver connects with the Authoritative Nameserver managed by hosing provider organizations like, Hostinger, Godday or CloudFlair. This servers actually the holds the records of the IP address and the corresponding website and domain connected to it. it responds back with the IP and the site in a return query.

- **returning the exact registered IP and the Loading site** -
The return query will hit browser after the response by the Authoritative Nameserver and it will finally display the domain name and the Loading site on the browser.

---

## Lecture 23 - IPv6 addresses 

IPv6 (Internet protocol version 6) addresses are 128 bit binary Numeric number/or 32 digit hexadecimal number used to identify or locate a device or network connected to a IPv6 based network. 

**Notation :-**   
IPv6 address is a combination of group of 8 group of hexadecimal numbers while each group has 4 hexadecimal numbers. 

**Shortening Rules :-** 
- 0 at the starting of any number group in an IPv6 address can be drooped. for ex - `0005` and `00a1` can be written as `5` and `a1`. 

- repetitive 0s in a group in an IPv6 address can be written as `::`
for ex - `fe80:0000:238c === fe80::238c` 

**An IPv6 address for localhost server :-**   
when we start a node.js/backend server, it starts on a IPv6 address by default it can be accessed on the `localhost:{port}` and can be also accessed here - `::1{port}`.

---

## Lecture 25, 26,  - What is `Port` numbers, WireShark, Network Interfaces

A port number is a 16-bit unique number (Ranges between 0 and 65,535) which comes after any IP address in a network. it directs the The incoming or outgoing network data with every request to reach a specific running application, or a service/process on a specific device connected with the network. 

To understand it on a basic level, an IP address represents a home or a building on a network while a port number represents a specific room or apartment in a building to transfer the data to a specific location on a device. 

---

### How port numbers work - 

- **IP + Port :-**    
On the network it requires both the IP to define and locate the device and the port number to define a specific running process or application on that same device. 

- **Simultaneous network tasks :-**  
It allows a single device to run multiple networking tasks at once by connecting multiple ports on a single IP address. 

---

### Categories of port numbers - 
- **Well Known Ports** - (`0` - `1023`)
- **Registered Ports** - (`1024` - `49151`)
- **Dynamic, Private or Ephemeral Ports** - (`49152` - `65535`)


#### Learned About - how to inspect IP addresses and port numbers of incoming and outgoing Network requests using a Tool - **WireShark**

---

### Network Interfaces - 

The ways we can access the internet using different Devices are Called **"Network Interfaces"**. the Network Interfaces can differ as the device changes. common examples of Network Interfaces are for - 

- Ethernet cable, Ethernet card
- Wifi
- Bluetooth
- USB Connection with a cable
- Cellular Data (for mobile only)

---

## Lecture 28 - What is `MAC Address`?

A mac address is 48 bit Unique physical hardware identifier, assigned by the **Network interface controller (NIC)** by it Manufacturer.   

**Format and Structure -**   
Its a 12 digit hexadecimal number grouped into 6 equal groups and separated by colons, hyphens or dots. its first 6 digits represents the hardware manufacturer and the next 6 digits represent the unique identifier number assigned by the hardware manufacturer to its **network interface controller card**

**Use cases -**   
- wifi router use MAC addresses to list down the devises connected with it in client tables.
- wireless network devises such as wi-fi routers and others use MAC addresses to filter out the devises when they are intended to share a specific data to a specific devices 

---

## Lecture 30 - The OSI Model (Open Systems Interconnection Model)

The OSI model is a 7 layer conceptual framework created by **International Organization for Standardization** to define how the Computer systems will communicate with networks.   

form the top to bottom, the 7 layers are - 

- **Layer 7 Application layer** -   
Its the layer where we can decide the way of communication with networks, and define the data to be sent through the network. examples HTTP, HTTPS, DNS, FTP, etc.

- **Layer 6 Presentation layer** -    
In the presentation layer the Encryption/decryption, Compression, serialization of data will be performed and the data will be translated in to sharable format (Binaries).   

- **Layer 5 Session layer** -  
The session layer Establishes, manages, terminates the Network connection between the devices (source device and destination device).  

- **Layer 4 Transport layer** -  
The transport layer manages the End-to-end communication, error checking between the source device and destination device. and it breaks down the data into small chunks called **"Segments".**

- **Layer 3 Network layer** -  
The Network layer manages the addressing of each data Segment. it assigns an IPv4/IPv6 address along with a port address to each segment. a segment after adding IPv4/IPv6 address and a port address is called a **Packet**. 

- **Layer 2 Data Link layer** -   
The Data Link layer adds a unique **MAC address** to each data packets so the destination device could know with which device the data belongs to. 

- **Layer 1 Physical layer** -   
The Physical layer handles the transmission/sending the raw datastream over a physical media like cables (Ethernet.fiber optics as electric, radio signals). 

When the data travels from Layer 7 to 1 (Data sending) the process is called **Encapsulation**. and when the data travels from Layer 1 to 7 (Data Receiving) the process is called **De-capsulation**.

---

## Lecture 31 - TCP/IP model - 

The TPC/IP model is standardized and Narrowed down model of the OSI model. the OSI model is a 7 layer theoretical framework to understand the architecture of how the computer systems and networks communicate. on the other hand the TCP/IP model is 4/5 layer standard built and used in real world communication across the internet. 

### Primary Differences between OSI and TCP/IP model -  

|OSI Model Layer|TCP/IP model layer|Data Unit|
|--|--|--|
|Application (Layer 7)|Application (Layer 4)|Data|
|Presentation (Layer 6)|Application (Layer 4)|Data|
|Session (Layer 5)|Application (Layer 4)|Data|
|Transport (Layer 4)|Transport (Layer 3)|Segments (TCP)/ DataGrams (UDP)|
|Network (Layer 3)|Internet (Layer 2)|Packets|
|Data Link (Layer 2)|Network access (Layer 1)|Frames|
|Physical (Layer 1)|Network access (Layer 1)|Bits|

---

## Lecture 32 - Topologies 

Topology in network connection is the physical or logical arrangement or connection between devices (notes in a network). it dictates how the devices are arranged are connected with each other in a network and how the data is moving across the network. 

### Common Types of network Topologies - 
- **Peer to peer Topology -** (connection of 2 devices)
- **Bus Topology -** (More than 2 devices connected in a line)
- **Ring Topology -** (Loop of connected devices)
- **Star Topology -** (More than 2 devices connected with a single network device making a start)
- **Mesh Topology -** (network of more than 2 devices, while each device is connected with all others)
- **Tree Topology -** (connected devices making a Tree structure)
- **Hybrid Topology -** (A custom Topology or a blend of more than 2 topologies like star, mesh, bus or ring)

---

## Lecture 33 - TCP and UDP Protocols

TCP (Transmission control protocol) and UDP (User Datagram protocol) are network protocols used to transfer data over the network using internet. They both are based in IP (Internet protocol). 

### **TCP Protocol** -  
TCP Protocol is a reliable way to transfer the data because - 
- It uses **Three way handshake (SYN, SYN-AKC, AKC)** to establish a secure connection between 2 devices, before start sending the data
- It guarantees delivery with the help of AKCs and retransmission on the packets los.
- It maintains the order of packets for safe reassembly of data when it reaches the destination. 
- It has haviour overload because of Three way handshake, and retransmission cycles.
- Heavily used in protocols like HTTP, HTTPS, DNS, FTP, SMTP, etc.

### **UDP Protocol** - 
UDP Protocol is a unreliable and comparatively slower way to transfer the data because -
- It sends the data immediately with out a handshake.
- dose not guarantees delivery, maintains the order of packets, and not handles packets loss. 
- its has lesser overload compared to TCP
- commonly used for Video streaming, online gaming, video calls. 

--- 

## Lecture 34, 35, 36 - 

### What is SSH - 
SSH stands for **Secure shell**, built on top of TCP protocol. it's a cryptographically encrypted network protocol used to connect, manage and communicate between 2 remote devices on an unsecure network like Internet.

### Advantages of shh - 
- **Secure Remote command line access**
- **Secure and reliable file transfer**
- **Command line tunneling and port forwarding**
- **Automation**

### `scp` command - 
SCP command **(Secure copy protocol)** is a Built in utility in ssh used to copy files and directories between remote servers over a network. it uses ssh protocol for authentication of user and data transfer behind the scene to ensure the data remain safe and encrypted during the network communication. 

---

## Lecture 37, 38 - 

**Creating an AWS account for upcoming backend projects !** 

## Lecture 39 - EC2 instance on AWS 

- created EC2 instance (A virtual public server running on AWS cloud which lets us rent a application in hardware server)
- configured firewall rules for outbound requests in the virtual ec2 server
- connected with EC2 instance with our local computer using ssh protocol
- associated a public ip address (Elastic IP address) provided by AWS to the EC2 instance server
- learned how to stop, start and terminate a running EC2 instance

---