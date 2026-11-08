---
name: rea
slug: rea-sannw
summary: >-
  REA fork with experimental PlayStation 2 (PS2) MIPS/R5900 ELF analysis on
  native Windows via Ghidra and Emotion Engine Reloaded. Static analysis only;
  limited validated ELF profile.
categories:
  - preservation
  - development
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: MIT
homepage: 'https://rea.tools'
source:
  provider: github
  repository: SanNw/rea
  repositoryId: '1424303168'
repository:
  archived: false
  defaultBranch: codex/ps2-r5900
  stars: 0
  forks: 0
  lastCommit: '2026-10-18T15:24:46Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T07:22:36.631Z'
automation:
  sync: true
  github:
    repoEtag: W/"13ad170fdee60d2786f6e721a7548e98b176718f3420c773a076712d9615a3e1"
    releasesEtag: '"d74739b5b55bb7861259cdc7802b48f20c2b7cb51c27157df555e44d97bb176d"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: morluto/rea
  source: morluto/rea
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
