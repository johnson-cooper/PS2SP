---
name: FreeDVDBoot
slug: freedvdboot-littlebalup
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
  repository: littlebalup/FreeDVDBoot
  repositoryId: '477300498'
repository:
  archived: false
  defaultBranch: master
  stars: 3
  forks: 0
  lastCommit: '2022-02-02T08:15:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-02T23:30:49.273Z'
automation:
  sync: true
  github:
    repoEtag: W/"dbb9051b2a82a20e7d156d0e081755c89f896c85d793d2096b8054df81a8e83c"
    releasesEtag: '"f9d1805627afeeeb8335f78ffb35eade606e35619da6e1d8c24312d4e6777828"'
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
