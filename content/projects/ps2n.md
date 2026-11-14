---
name: ps2n
slug: ps2n
summary: >-
  Static recompiler for PlayStation 2 executables. It reads an Emotion Engine
  (R5900) ELF, finds its functions, translates every instruction into plain C++,
  and links the result against a runtime that stands in for the rest of the
  console: the EE kernel, the hardware registers, the GS, and the IOP. The
  output is an ordinary buildable native program.
categories:
  - runtimes
  - development
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: 'https://luisbraganca.github.io/ps2n/'
source:
  provider: github
  repository: luisbraganca/ps2n
  repositoryId: '1453786236'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-14T00:20:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-14T03:17:05.542Z'
automation:
  sync: true
  github:
    repoEtag: W/"5e57246a5199aceafccc6df5015f8ca66b9d054b2a8becd7268a465c8573fa50"
    releasesEtag: '"da75f3c1438a29a4ff9b17b9d2405560409358ebfa56c09e1268291275d476c8"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
  maturity: active-unreleased
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
