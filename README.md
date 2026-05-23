# single-tier-app-k8s
# 🚀 Single Tier Application Deployment using Docker & Kubernetes

This project demonstrates how to deploy a simple Node.js application using:

- Docker
- Kubernetes
- KIND (Kubernetes IN Docker)

---

# 📌 Project Overview

This is a simple Single Tier Application where:

- Node.js app runs inside Docker container
- Docker container runs inside Kubernetes Pod
- Kubernetes Deployment manages Pods
- Kubernetes Service exposes application

---

# 🏗️ Architecture

User
↓
Kubernetes Service
↓
Kubernetes Pod
↓
Docker Container
↓
Node.js Application

---

# 📂 Project Structure

single-tier-app/
│
├── app.js
├── package.json
├── Dockerfile
├── README.md
│
└── k8s/
├── deployment.yml
└── service.yml

---

# ⚙️ Technologies Used

- Node.js
- Express.js
- Docker
- Kubernetes
- KIND
- Kubectl

---

# 📦 Docker Concepts

## Docker Image

Docker image is a packaged application containing:

- source code
- dependencies
- runtime

Build image:

```bash
docker build -t single-tier-app .
```

---

## Docker Container

Container is a running instance of Docker image.

Run container:

```bash
docker run -d -p 4000:4000 --name single-app single-tier-app
```

---

# ☸️ Kubernetes Concepts

## Pod

Pod is the smallest deployable unit in Kubernetes.

Pod contains:
- container
- storage
- networking

---

## Deployment

Deployment manages Pods.

Features:
- self healing
- scaling
- rolling updates

---

## Service

Service exposes application to external users.

Used for:
- stable networking
- load balancing

---

# 🚀 Setup Instructions

# 1️⃣ Clone Repository

```bash
git clone https://github.com/Ritishhire/single-tier-app-k8s.git
```

---

# 2️⃣ Move into Project

```bash
cd single-tier-app-k8s
```

---

# 3️⃣ Build Docker Image

```bash
docker build -t single-tier-app .
```

---

# 4️⃣ Create KIND Cluster

```bash
kind create cluster --name single-cluster
```

---

# 5️⃣ Load Docker Image into KIND

```bash
kind load docker-image single-tier-app --name single-cluster
```

---

# 6️⃣ Deploy Kubernetes Resources

```bash
kubectl apply -f k8s/
```

---

# 7️⃣ Check Pods

```bash
kubectl get pods
```

---

# 8️⃣ Check Services

```bash
kubectl get svc
```

---

# 9️⃣ Port Forward Service

```bash
kubectl port-forward service/single-tier-service 4000:80
```

---

# 🔥 Access Application

Open browser:

http://localhost:4000

---

# 📈 Scaling Application

Scale deployment:

```bash
kubectl scale deployment single-tier-deployment --replicas=5
```

---

# 🔄 Rolling Update

Update deployment image:

```bash
kubectl set image deployment/single-tier-deployment single-tier-container=single-tier-app:v2
```

---

# ♻️ Rollback Deployment

```bash
kubectl rollout undo deployment single-tier-deployment
```

---

# 🧹 Cleanup

Delete deployment and service:

```bash
kubectl delete -f k8s/
```

Delete cluster:

```bash
kind delete cluster --name single-cluster
```

---

# 📚 Learning Outcomes

In this project I learned:

- Docker Image Creation
- Docker Container Management
- Kubernetes Pods
- Kubernetes Deployments
- Kubernetes Services
- Scaling
- Self Healing
- Rolling Updates
- KIND Cluster Setup

---

# 👨‍💻 Author

Ritish Hire
