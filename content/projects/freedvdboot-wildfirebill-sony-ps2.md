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
  lastSynchronized: '2026-11-24T06:04:11.074Z'
automation:
  sync: true
  github:
    repoEtag: W/"d99ff9e2eaa1ed30131bd12a97b27cc788c85f5a64bc53972060de8f3c456813"
    releasesEtag: '"1225e3926759f2117b9a830704182986e371cb3e544c44a80269ecddea7b4787"'
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
