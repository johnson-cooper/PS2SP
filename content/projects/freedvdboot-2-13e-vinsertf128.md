---
name: FreeDVDBoot-2.13E
slug: freedvdboot-2-13e-vinsertf128
summary: PlayStation 2 DVD Player Exploit for DVD Reader version 2.13E
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
  repository: VINSERTF128/FreeDVDBoot-2.13E
  repositoryId: '1232980511'
repository:
  archived: false
  defaultBranch: master
  stars: 9
  forks: 0
  lastCommit: '2026-09-07T18:26:06Z'
latestRelease:
  tag: '1.1'
  name: 'Updated ISO '
  publishedAt: '2026-09-07T18:26:06Z'
  url: 'https://github.com/VINSERTF128/FreeDVDBoot-2.13E/releases/tag/1.1'
activity:
  lastSynchronized: '2026-10-07T16:30:36.421Z'
automation:
  sync: true
  github:
    repoEtag: W/"ac20e001ee8b1a6be1b80d48f62ba837f2c3498c29fb2a6c09f5f428a9854ba4"
    releasesEtag: W/"7bdecaa25ac7efe7d502c08c63160f2006e56b11e4a8779920ce49cabdc80d16"
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
