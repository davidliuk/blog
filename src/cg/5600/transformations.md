# Transformations

[slides](https://www.cis.upenn.edu/~cis4600/19fa/lectures/460transforms3d.html#slide-0)

## Basics

### vector

vs point

- point: position
- Vector: direction

Arithmetic

- addition
- Substraction

Norm (length): $|p|=\sqrt{x^2+y^2+z^2}$

Dot Product

Cross Product

### matrix

- Transpose
- Determinat
- Multiplication

Dot product: 

$\vec v_1 \cdot \vec v_2=|v_1||v_2|\cos \theta$

Cross product: 

$|\vec v_1 \times \vec v_2|=|v_1||v_2|\sin \theta$

> is only defined for 3D vectors

orthogonal 正交

Scale

> Rotation: 逆时针旋转的角度
>
> Scale的时候起点注意也相对于原点等比变化了

Rotation Around a point t

TR-T

applying **from right to left**

---





## Development

The frontend of the Observatory UI is built using a combination of modern web technologies, providing a responsive and interactive user interface to visualize tracing data from various services. This section outlines the frontend development process, including how to set up a local development environment, interact with backend services, and deploy the application to different environments.

### 1. **Local Development**
To begin developing locally, follow these steps:

1. **Install Dependencies**: Ensure you have all necessary dependencies installed by running:
   ```bash
   npm install
   ```
   
2. **Start the Development Server**: Once the dependencies are installed, you can start the local development server by running:
   ```bash
   npm run start
   ```
   This will launch the application in development mode, where you can make changes and see the updates in real time.

3. **Connecting to Backend Services**: While developing locally, you may need to access backend services running on remote servers. To establish a connection to these services, use the following SSH command:
   ```bash
   ssh -L 8080:localhost:8080 cds
   ```
   This command forwards local port `8080` to the remote server, allowing your local development server to make API calls to the backend.

### 2. **Deployment**
The Observatory UI is deployed to different environments (Beta, Gamma, and Production) using the following workflow:

1. **Initialize the Environment**: Before deploying, make sure to initialize the environment using:
   ```bash
   mwinit
   ```
   This prepares the workspace and ensures the necessary configurations are in place.

2. **Deploy the Application**: After initializing the environment, you can deploy the application to your desired environment by running:
   ```bash
   harmony app deploy
   ```
   This command builds and deploys the frontend code to the appropriate environment, making the latest changes available for use.

### 3. **Frontend Stack**
The frontend stack consists of the following key technologies:
- **React**: A JavaScript library for building user interfaces, used to create the various components and manage the application's state.
- **Harmony**: The framework that integrates the Observatory UI with the broader Amazon ecosystem, ensuring seamless interaction with other services.
- **AWS UI**: A set of reusable UI components that ensure a consistent and cohesive design language across the application.
- **ECharts**: A powerful charting library used to visualize tracing data, such as service interactions, timelines, and detailed process flows.
- **Redux**: A state management library used to handle global state across components, ensuring data consistency and predictable behavior.

