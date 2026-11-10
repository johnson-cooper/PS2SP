---
name: FreeDVDBoot
slug: freedvdboot-fvogliotti
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
  repository: fvogliotti/FreeDVDBoot
  repositoryId: '275990406'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-06-29T22:05:05Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-10T01:32:02.220Z'
automation:
  sync: true
  github:
    repoEtag: W/"4633206e18a282abe8be97eb6ae12bc6df4125e1c550810af62fdb12f1b0012d"
    releasesEtag: '"d76f3e553c1dd5eef60eeb0d76793c9027541520aa34488ad60fccdc0acfeba2"'
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
