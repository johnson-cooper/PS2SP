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
  lastSynchronized: '2026-10-29T07:07:35.806Z'
automation:
  sync: true
  github:
    repoEtag: W/"c30fb3e639e52cb2e4280f05e147e9f1908601a57f5ad8aa0c0466fe1669eb9e"
    releasesEtag: '"0e55d62a156b051eca49228a211e37e97ef1756e978a92491825b134ce41ed33"'
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
