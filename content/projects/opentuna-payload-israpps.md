---
name: opentuna-payload
slug: opentuna-payload-israpps
summary: PlayStation 2 software project discovered by PS2SP.
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: israpps/opentuna-payload
  repositoryId: '528654065'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2022-10-05T01:54:22Z'
latestRelease:
  tag: latest
  name: Latest automated payload compilation
  publishedAt: '2022-08-25T01:43:08Z'
  url: 'https://github.com/israpps/opentuna-payload/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-28T02:01:18.208Z'
automation:
  sync: true
  github:
    repoEtag: W/"562462263a0bc3f2585e3c6133af03405bfe809960bf8e266335c5cb627d5f75"
    releasesEtag: W/"69d31c2a5edd9cf1d906f6b5bccd7f2609e0a04b64f2cba1471123703fc7bc65"
discovery:
  method: 'fork-network:blckbearx/opentuna-payload'
  confidence: 95
  evidence:
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/opentuna-payload'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: blckbearx/opentuna-payload
  source: ps2homebrew/opentuna-payload
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
