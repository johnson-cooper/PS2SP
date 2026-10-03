---
name: FreeDVDBoot
slug: freedvdboot-heradon
summary: PlayStation 2 DVD Player Exploit
categories:
  - uncategorized
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: heradon/FreeDVDBoot
  repositoryId: '632338036'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2022-02-02T08:15:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-03T23:04:57.168Z'
automation:
  sync: true
  github:
    repoEtag: W/"1e8866b8979eac761178f0bd4d4eaebf7e14a59a1158fae51170875d48a0b517"
    releasesEtag: '"eff441420b9f37d0682a3b5b87607fca0b4a6609b1e9445c3d202971df108992"'
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
