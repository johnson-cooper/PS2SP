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
  lastSynchronized: '2026-11-25T02:30:11.081Z'
automation:
  sync: true
  github:
    repoEtag: W/"9cc3e634a9a4d7f30573a9f1e705dceb93f446f6af0fef1af1affc5b37892b05"
    releasesEtag: W/"9d0fff63f2ce1b2dfbae550dfd86ba6b903ad6d3c6e0a80f96f2af9e4a0ed0e5"
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
