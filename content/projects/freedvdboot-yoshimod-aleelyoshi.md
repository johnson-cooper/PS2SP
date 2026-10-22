---
name: FreeDVDBoot-YoshiMod
slug: freedvdboot-yoshimod-aleelyoshi
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
  repository: aleelyoshi/FreeDVDBoot-YoshiMod
  repositoryId: '1391223456'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-09-29T17:46:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-22T19:15:55.996Z'
automation:
  sync: true
  github:
    repoEtag: W/"856b7032662f91f053acf86f4874826f4c4af3fe7389dfbb07f5d2719a70a92b"
    releasesEtag: '"b33679cef99543938486d165e96451f4443539d11787e6ae7f8cfd42561bd983"'
discovery:
  method: 'incremental:topic:ps2'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
