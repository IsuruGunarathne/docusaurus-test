---
id: semantic-caching
title: Semantic Caching
sidebar_position: 3
---

# Semantic Caching

Semantic caching reduces LLM API costs and latency by returning cached responses for semantically similar prompts.

## How It Works

1. A user sends a prompt to the AI Gateway
2. The gateway computes a vector embedding of the prompt
3. It checks the cache for semantically similar previous prompts (similarity threshold configurable)
4. If a match is found above the threshold, the cached response is returned
5. Otherwise, the request is forwarded to the LLM provider and the response is cached

## Configuration

```yaml
semantic_cache:
  enabled: true
  similarity_threshold: 0.92
  ttl_seconds: 3600
```
