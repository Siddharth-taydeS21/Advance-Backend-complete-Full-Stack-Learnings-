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