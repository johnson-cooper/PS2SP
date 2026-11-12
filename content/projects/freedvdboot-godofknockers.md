---
name: FreeDVDBoot
slug: freedvdboot-godofknockers
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
  repository: GodOfKnockers/FreeDVDBoot
  repositoryId: '275828296'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-06-29T13:16:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-12T18:56:24.478Z'
automation:
  sync: true
  github:
    repoEtag: W/"bc18d43cb7f54b938c680594a6303e84e66f0b1fc543492dc997093caeabdd06"
    releasesEtag: '"db0eeaf78c7cffaf6713f0d17b358b8c3fd7df257f1d689bfc9bb58c91a46e08"'
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
