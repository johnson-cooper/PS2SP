---
name: FreeDVDBoot
slug: freedvdboot-mxrachel
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
  repository: mxrachel/FreeDVDBoot
  repositoryId: '276019343'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2022-05-24T04:19:00Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-09T06:28:54.736Z'
automation:
  sync: true
  github:
    repoEtag: W/"0cee5a1bf6d00d506ac8dc91703ae70abe9f5bea9b48191481f308bb7a76f769"
    releasesEtag: '"2fe2afac4e4c51d345b0b3b79c7fb7f05cfb2cad022de484e373ed5d4899b781"'
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
hidden: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
