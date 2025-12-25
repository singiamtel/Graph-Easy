/**
 * VCG output generator for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::As_vcg from the Perl Graph::Easy library
 */

export class AsVcg {
  protected _remap_custom_vcg_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _remap_custom_vcg_attributes'); }
  protected _vcg_remap_shape(value: string): string { throw new Error('Method not implemented: _vcg_remap_shape'); }
  protected _vcg_remap_align(value: string): string { throw new Error('Method not implemented: _vcg_remap_align'); }
  protected _vcg_remap_flow(value: string): string { throw new Error('Method not implemented: _vcg_remap_flow'); }
  protected _class_attributes_as_vcg(className: string): string { throw new Error('Method not implemented: _class_attributes_as_vcg'); }
  protected _generate_vcg_edge(edge: any): string { throw new Error('Method not implemented: _generate_vcg_edge'); }
  protected _as_vcg(): string { throw new Error('Method not implemented: _as_vcg'); }
  attributes_as_vcg(attrs: Record<string, any>): string { throw new Error('Method not implemented: attributes_as_vcg'); }
  as_vcg_txt(): string { throw new Error('Method not implemented: as_vcg_txt'); }
}
