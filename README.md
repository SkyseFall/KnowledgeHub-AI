# KnowledgeHub AI

AI-powered document intelligence and conversational knowledge platform.

KnowledgeHub AI allows users to upload documents, process their content,
generate embeddings, perform semantic retrieval, and ask natural-language
questions with source-grounded answers.

## Project Objectives

- Document upload and management
- Asynchronous document ingestion
- Text extraction and intelligent chunking
- Embedding generation and vector persistence
- Semantic search
- Retrieval-Augmented Generation (RAG)
- AI-powered conversational interface
- Source attribution and citations
- Conversation history
- Local and cloud deployment using a common codebase

## Technology Stack

### Backend

- Java 25
- Spring Boot 4.1.2
- Spring AI 2.0.2
- Maven 3.9+
- PostgreSQL
- pgvector
- Flyway

### Frontend

- React 19.3
- TypeScript
- Vite
- Tailwind CSS 4
- Redux Toolkit
- RTK Query
- React Router

### Infrastructure

- Docker
- Docker Compose
- Google Cloud Platform (planned)

### Testing

- JUnit 5
- Spring Boot Test
- Postman
- Vitest
- React Testing Library

## Repository Structure

```text
KnowledgeHub-AI/
├── backend/
├── frontend/
├── infra/
│   └── docker/
├── docs/
│   ├── architecture/
│   ├── milestones/
│   ├── troubleshooting/
│   └── interview-preparation/
├── .gitignore
└── README.md