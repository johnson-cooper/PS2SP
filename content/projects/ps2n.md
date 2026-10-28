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
license: null
homepage: null
source:
  provider: github
  repository: luisbraganca/ps2n
  repositoryId: '1437711930'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-28T23:06:15Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-28T23:33:39.545Z'
automation:
  sync: true
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
