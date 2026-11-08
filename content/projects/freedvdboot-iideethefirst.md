---
name: FreeDVDBoot
slug: freedvdboot-iideethefirst
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
  repository: iideeTheFirst/FreeDVDBoot
  repositoryId: '276159347'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-06-30T14:36:25Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T19:42:44.590Z'
automation:
  sync: true
  github:
    repoEtag: W/"bf0cb3f21b9dbe144a4bc3e1c0ff224873818b4af6bf95cabf7259ea68e137ed"
    releasesEtag: '"2d77d78d9406dfdb04f6cdb831785e70ead0264c82109729acd315cd0faa00fd"'
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
