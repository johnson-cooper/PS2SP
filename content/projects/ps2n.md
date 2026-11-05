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
  lastCommit: '2026-11-05T03:30:36Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T03:31:33.673Z'
automation:
  sync: true
  github:
    repoEtag: W/"ada9730d4b9d92285b3405936b50e0eec0863b7186cc65ac8d96840f1fb2b295"
    releasesEtag: '"d0fd33205f72e666ae36b3d0b58a9c1bc940fa028f6d4d3236e413053a4ae128"'
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
