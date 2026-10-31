---
name: champions-of-norrath
slug: champions-of-norrath-mustagedelta
summary: >-
  A work-in-progress matching decompilation of Champions of Norrath (PlayStation
  2, SLUS-20565) back to C source.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: MuStAgEDelta/champions-of-norrath
  repositoryId: '1441042259'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T15:23:57Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-31T18:45:56.304Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ensapra/champions-of-norrath'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: ensapra/champions-of-norrath
  source: ensapra/champions-of-norrath
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
