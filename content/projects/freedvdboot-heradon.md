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
  lastSynchronized: '2026-10-01T23:13:04.673Z'
automation:
  sync: true
  github:
    repoEtag: W/"a58dbb7f2f448f6d5eb74adcc4d6565cbafa5a4dcf47f8a200ba5e16306c342f"
    releasesEtag: '"6e97244dccb1a8057b6d23242a745e659f8d5a95344f558f28f4c7a6a8dfce19"'
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
