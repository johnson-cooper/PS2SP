---
name: FreeDVDBoot
slug: freedvdboot-al3x10m
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
  repository: al3x10m/FreeDVDBoot
  repositoryId: '275820745'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2020-06-29T13:16:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-31T05:41:14.300Z'
automation:
  sync: true
  github:
    repoEtag: W/"499b0589c6cfbd3372f328da8d3c3fa6fa90193f3b7578c66bc4391f33ac31bf"
    releasesEtag: '"b2698f3bc425a78276de1d8fc6bd7bb2255a34bae88cfdf311a1da54908ed37a"'
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
