import { Block, Lab, Tool, CertificationNode } from './types';

export const BLOCKS: Block[] = [
  {
    id: 1,
    title: "Network Fundamentals & GNS3 Setup",
    description: "Master the basics of networking protocols, GNS3 architecture, and virtualization.",
    duration: "Weeks 1-4",
    modules: [
      { id: "M1", title: "GNS3 Architecture", topics: ["Hypervisors", "Images", "Appliances"], labs: ["L1.1", "L1.2"] },
      { id: "M2", title: "Switching & Routing", topics: ["VLANs", "OSPF", "STP"], labs: ["L1.3"] },
    ]
  },
  {
    id: 2,
    title: "Network Security & Hardening",
    description: "Implement firewalls, VPNs, and Layer 2 security measures.",
    duration: "Weeks 5-8",
    modules: [
      { id: "M3", title: "Firewall Technologies", topics: ["ASA", "Zone-based FW", "NAT"], labs: ["L2.1", "L2.2"] },
      { id: "M4", title: "VPN Implementation", topics: ["IPSec", "SSL VPN", "Site-to-Site"], labs: ["L2.3"] },
    ]
  },
  {
    id: 3,
    title: "Threat Detection & Analysis",
    description: "Deploy IDS/IPS systems and analyze traffic patterns.",
    duration: "Weeks 9-12",
    modules: [
      { id: "M5", title: "IDS/IPS Deployment", topics: ["Snort", "Suricata", "Rules"], labs: ["L3.1"] },
      { id: "M6", title: "Packet Analysis", topics: ["Wireshark", "Tcpdump", "Traffic Flows"], labs: ["L3.2"] },
    ]
  },
  {
    id: 4,
    title: "Advanced Pentesting & Automation",
    description: "Offensive security techniques and Python automation for networks.",
    duration: "Weeks 13-16",
    modules: [
      { id: "M7", title: "Network Automation", topics: ["Python", "Paramiko", "Netmiko"], labs: ["L4.1"] },
      { id: "M8", title: "Red Team Ops", topics: ["Kali Integration", "Exploitation", "Reporting"], labs: ["L4.2"] },
    ]
  }
];

export const LABS: Lab[] = [
  { id: "L1.1", title: "GNS3 Installation & Tuning", description: "Install GNS3, configure VM, test local server connectivity.", duration: "2h", difficulty: "Beginner", block: 1, tags: ["Setup", "VM"] },
  { id: "L1.2", title: "Building a Switched Fabric", description: "Configure VLANs, VTP, and STP on Cisco IOSv images.", duration: "3h", difficulty: "Beginner", block: 1, tags: ["Cisco", "Switching"] },
  { id: "L1.3", title: "OSPF Multi-Area Design", description: "Implement OSPF across 3 routers with area 0 backbone.", duration: "4h", difficulty: "Intermediate", block: 1, tags: ["Routing", "OSPF"] },
  { id: "L2.1", title: "ASA Firewall Basic Config", description: "Initialize Cisco ASA, configure interfaces and basic NAT.", duration: "3h", difficulty: "Intermediate", block: 2, tags: ["Firewall", "ASA"] },
  { id: "L2.2", title: "DMZ Implementation", description: "Create a secure DMZ zone for web servers using ACLs.", duration: "4h", difficulty: "Intermediate", block: 2, tags: ["Security", "Design"] },
  { id: "L2.3", title: "Site-to-Site IPSec VPN", description: "Establish an encrypted tunnel between two branch offices.", duration: "5h", difficulty: "Advanced", block: 2, tags: ["VPN", "Crypto"] },
  { id: "L3.1", title: "Snort IDS Implementation", description: "Deploy Snort in GNS3 and write custom alert rules.", duration: "4h", difficulty: "Advanced", block: 3, tags: ["IDS", "Linux"] },
  { id: "L3.2", title: "Malware Traffic Analysis", description: "Use Wireshark to identify C2 traffic in a pcap file.", duration: "3h", difficulty: "Intermediate", block: 3, tags: ["Forensics", "Wireshark"] },
  { id: "L4.1", title: "Python Network Scanner", description: "Write a Python script to map the GNS3 network topology.", duration: "2h", difficulty: "Advanced", block: 4, tags: ["Python", "Automation"] },
  { id: "L4.2", title: "Router Exploitation", description: "Simulate a brute force attack on a weak Telnet service.", duration: "3h", difficulty: "Advanced", block: 4, tags: ["Red Team", "Kali"] },
];

export const TOOLS: Tool[] = [
  { name: "GNS3", category: "Virtualization", complexity: 8, description: "Core network emulation platform." },
  { name: "Wireshark", category: "Analysis", complexity: 6, description: "Packet analyzer for network troubleshooting." },
  { name: "Kali Linux", category: "OS", complexity: 7, description: "Penetration testing distribution." },
  { name: "Snort", category: "IDS", complexity: 9, description: "Open source network intrusion detection." },
  { name: "Python", category: "Automation", complexity: 5, description: "Scripting for network tasks." },
  { name: "Cisco IOS", category: "Firmware", complexity: 6, description: "Standard router/switch operating system." },
];

export const CERTS: CertificationNode[] = [
  { name: "Network+", provider: "CompTIA", readinessBlock: 1, color: "#00d4ff" },
  { name: "CCNA", provider: "Cisco", readinessBlock: 2, color: "#00ff88" },
  { name: "Security+", provider: "CompTIA", readinessBlock: 3, color: "#ff4444" },
  { name: "CySA+", provider: "CompTIA", readinessBlock: 4, color: "#8b5cf6" },
];
