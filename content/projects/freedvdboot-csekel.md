---
name: FreeDVDBoot
slug: freedvdboot-csekel
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
  repository: csekel/FreeDVDBoot
  repositoryId: '275509442'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 1
  lastCommit: '2020-06-27T23:04:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-26T23:53:52.302Z'
automation:
  sync: true
  github:
    repoEtag: W/"0cb8c2379854a677c4c1456d769a57e0a564ead8a55fe60a5821741fe53037ae"
    releasesEtag: '"504ca22ff8123bd7805f73d3c3e9e41aa43de67ba6ae4002821d1e6a9f7aa914"'
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
