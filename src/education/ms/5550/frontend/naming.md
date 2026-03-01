# Naming

- Name spaces and directories
- DNS architecture
- Security issues with DNS
- DNSSEC, DANE

## Name spaces



## DNS

### DNS namespace

DNS has a hierarchical namespace

- ■ First level managed by the Internet Corporation for Assigned Names and Numbers (ICANN)
- ■ Authority over other levels is delegated: Second level generally managed by registrars, further levels managed by organizations or individuals
- ■ Result: Each domain owns its own names

## DNS security



## DNSSEC

Security Extensions

### Digital Signature



## Akamai

CDN

### Geolocation

- How does Akamai know which servers are ‘close’ to a client?
- This is done via **geolocation**
  - Essentially, a mapping of IP address to physical locations
  - “158.130.54.11? That machine is in Philadelphia, close to 34th and Walnut!”
- How are these maps built?
  - Simple version could use triangulation based on pings from different servers
  - The reality is a LOT more complicated!
