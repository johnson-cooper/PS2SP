---
name: FreeDVDBoot
slug: freedvdboot-wildfirebill-sony-ps2
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
  repository: wildfirebill-sony-ps2/FreeDVDBoot
  repositoryId: '1245204209'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-22T19:06:05Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-03T06:33:46.670Z'
automation:
  sync: true
  github:
    repoEtag: W/"ebf111dfeca3f94e17c21bee8ca75794c60685025c1fb6d00f22a1ed4d897e9d"
    releasesEtag: '"089683c071042ad1545a239b9432414c25cabe2d39fe188ff3eb2193f25c0681"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
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
