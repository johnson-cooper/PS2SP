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
  lastSynchronized: '2026-10-31T05:41:14.735Z'
automation:
  sync: true
  github:
    repoEtag: W/"60621f6fca5f5c00209170ed25363908a64ec5763bd03b81db6d84d4febb35d5"
    releasesEtag: '"b2698f3bc425a78276de1d8fc6bd7bb2255a34bae88cfdf311a1da54908ed37a"'
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
