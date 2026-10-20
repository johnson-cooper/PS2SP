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
  lastSynchronized: '2026-10-20T06:00:49.328Z'
automation:
  sync: true
  github:
    repoEtag: W/"841d181ba17f0d78179762051e8b95c8d45dc23cb8b37dc91d0a85251ab3ab9f"
    releasesEtag: '"beabca011d245159687fb6a685ede4790f750a2002b686c57e5bbc672bd5ded1"'
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
