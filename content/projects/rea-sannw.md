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
  lastSynchronized: '2026-10-30T07:08:25.447Z'
automation:
  sync: true
  github:
    repoEtag: W/"f90924c174edc65067780f7271c6ce0b3019d884aa0367087623ebda9aa8435a"
    releasesEtag: '"93e3f34a5d35d00255924ba0a03af83e60bd3648a7f532bcf2317bb9d0e54b8c"'
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
