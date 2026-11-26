---
name: FreeDVDBoot
slug: freedvdboot-at6969
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
  repository: AT6969/FreeDVDBoot
  repositoryId: '1268057847'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-06-27T23:04:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T05:04:39.329Z'
automation:
  sync: true
  github:
    repoEtag: W/"f9b07c697b5470f6b9f80715f71a388e7594237b5ee1fe8ab84b29e047166338"
    releasesEtag: '"7807fc945c82a55a373917423d07bcc65bba2c22ba0a38e4906861cea414cdb8"'
discovery:
  method: 'fork-network:csekel/FreeDVDBoot'
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
  forkOf: csekel/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
