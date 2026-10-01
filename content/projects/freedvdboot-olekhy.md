---
name: FreeDVDBoot
slug: freedvdboot-olekhy
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
  repository: olekhy/FreeDVDBoot
  repositoryId: '586506402'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2022-02-02T08:15:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-01T23:13:06.313Z'
automation:
  sync: true
  github:
    repoEtag: W/"53f107b29d34420536013b64d5d4dc33d4b2d2df7299d621c600321cae412e1a"
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
