# Graph::Easy TypeScript Port

This is a TypeScript port of the Perl Graph::Easy library. The goal is to provide a one-to-one translation of all functionality while maintaining the same API structure.

## Current Status

### Phase 1: Structure and Stubs ✅ COMPLETE

All TypeScript files have been created with stubbed methods matching the Perl originals:

#### Core Classes (27 files)
- ✅ Base.ts - Base class for all objects (19 methods)
- ✅ Easy.ts - Main graph container (74 methods)
- ✅ Node.ts - Node implementation (57 methods)
- ✅ Edge.ts - Edge implementation (24 methods)
- ✅ Group.ts - Group/cluster implementation (19 methods)
- ✅ Attributes.ts - Attribute handling and color schemes (42 methods)

#### Parsers (3 files)
- ✅ Parser.ts - Base parser (43 methods)
- ✅ Parser/Graphviz.ts - DOT format parser (61 methods)
- ✅ Parser/VCG.ts - VCG/GDL format parser (42 methods)

#### Layout Engine (7 files)
- ✅ Layout.ts - Core layout (8 methods)
- ✅ Layout/Scout.ts - A* pathfinding (17 methods)
- ✅ Layout/Path.ts - Path management (10 methods)
- ✅ Layout/Chain.ts - Chain layout (8 methods)
- ✅ Layout/Repair.ts - Layout repair (11 methods)
- ✅ Layout/Grid.ts - Grid layout (2 methods)
- ✅ Layout/Force.ts - Force-directed layout (1 method)

#### Specialized Node/Edge/Group Types (6 files)
- ✅ Node/Cell.ts - Grid cell node (7 methods)
- ✅ Node/Anon.ts - Anonymous node (8 methods)
- ✅ Node/Empty.ts - Empty placeholder (2 methods)
- ✅ Edge/Cell.ts - Edge cell (13 methods)
- ✅ Group/Cell.ts - Group cell (9 methods)
- ✅ Group/Anon.ts - Anonymous group (8 methods)

#### Output Generators (5 files)
- ✅ As/ascii.ts - ASCII art output (23 methods)
- ✅ As/graphviz.ts - Graphviz DOT output (23 methods)
- ✅ As/graphml.ts - GraphML XML output (6 methods)
- ✅ As/txt.ts - Text output (5 methods)
- ✅ As/vcg.ts - VCG output (6 methods)

#### Tools
- ✅ bin/graph-easy.ts - CLI tool (stub)
- ✅ index.ts - Main export file

## Directory Structure

```
src/
├── Base.ts
├── Easy.ts
├── Node.ts
├── Edge.ts
├── Group.ts
├── Attributes.ts
├── Parser.ts
├── Parser/
│   ├── Graphviz.ts
│   └── VCG.ts
├── Layout.ts
├── Layout/
│   ├── Scout.ts
│   ├── Path.ts
│   ├── Chain.ts
│   ├── Repair.ts
│   ├── Grid.ts
│   └── Force.ts
├── Node/
│   ├── Cell.ts
│   ├── Anon.ts
│   └── Empty.ts
├── Edge/
│   └── Cell.ts
├── Group/
│   ├── Cell.ts
│   └── Anon.ts
├── As/
│   ├── ascii.ts
│   ├── graphviz.ts
│   ├── graphml.ts
│   ├── txt.ts
│   └── vcg.ts
├── bin/
│   └── graph-easy.ts
└── index.ts
```

## Next Steps

### Phase 2: Core Implementation
1. Implement Base class methods (foundation for all objects)
2. Implement Attributes module (color handling, validation)
3. Implement Node class (basic node operations)
4. Implement Edge class (edge operations)
5. Implement Group class (group/cluster operations)
6. Implement Easy class (main graph container)

### Phase 3: Parser Implementation
1. Implement base Parser class
2. Implement Graph::Easy text format parser
3. Implement Graphviz DOT parser
4. Implement VCG/GDL parser

### Phase 4: Layout Engine Implementation
1. Implement core Layout class
2. Implement layout algorithms (Scout, Path, Chain, Repair, Grid, Force)
3. Implement specialized Cell types

### Phase 5: Output Generators Implementation
1. Implement ASCII art generator
2. Implement Graphviz DOT generator
3. Implement GraphML generator
4. Implement text generator
5. Implement VCG generator

### Phase 6: CLI Tool
1. Implement command-line interface
2. Add file I/O handling
3. Add format conversion support

### Phase 7: Testing
1. Port Perl tests to TypeScript/Jest
2. Ensure 100% compatibility with original behavior
3. Add integration tests

## Translation Guidelines

To maintain exact compatibility with the Perl version:

1. **One-to-one function mapping** - Every Perl method has a corresponding TypeScript method
2. **Preserve method signatures** - Keep parameter counts and return types equivalent
3. **Maintain behavior** - Any divergence from Perl behavior is considered a bug
4. **Use TypeScript features** - While maintaining compatibility, use modern TypeScript features:
   - Strong typing
   - Interfaces for better code organization
   - Generics where appropriate
   - Modern ES6+ syntax

## Building

```bash
npm install
npm run build
```

## Testing

```bash
npm test
```

## Method Count Summary

- **Total Methods**: 528+ methods across 27 files
- **Implemented**: 0 (0%)
- **Stubbed**: 528+ (100%)

All methods currently throw `Error('Method not implemented: <methodName>')` to clearly indicate what needs to be implemented.

## Contributing

When implementing methods:

1. Read the corresponding Perl code in `lib/Graph/Easy/`
2. Translate the logic to TypeScript
3. Preserve exact behavior (including edge cases)
4. Add type annotations
5. Test against original Perl test cases
6. Mark any known divergences

## License

This TypeScript port maintains the same GPL-2.0 license as the original Perl Graph::Easy library.

## Original Author

Original Perl version by Tels (http://bloodgate.com)
TypeScript port by contributors
