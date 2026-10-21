---
name: FreeDVDBoot-AIO
slug: freedvdboot-aio-arthrimus
summary: PlayStation 2 DVD Player Exploit
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Arthrimus/FreeDVDBoot-AIO
  repositoryId: '825931354'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-07-08T19:34:36Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-21T15:14:57.341Z'
automation:
  sync: true
  github:
    repoEtag: W/"f4179be5ede41c56ba9ad2a28a7a23bc17ee92bc8aac0210c47033b762f4086f"
    releasesEtag: '"611e30d199f302d8f78bca285a41fb0f9611f5e583be1fd234f471bc48e862ef"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
