---
name: champions-of-norrath
slug: champions-of-norrath-nathanian
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
  repository: Nathanian/champions-of-norrath
  repositoryId: '1431277956'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-23T16:14:21Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-23T17:27:12.070Z'
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
