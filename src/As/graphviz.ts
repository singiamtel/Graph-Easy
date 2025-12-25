/**
 * Graphviz DOT output generator for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::As_graphviz from the Perl Graph::Easy library
 */

export class AsGraphviz {
  protected _remap_custom_dot_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _remap_custom_dot_attributes'); }
  protected _remap_color(color: string): string { throw new Error('Method not implemented: _remap_color'); }
  protected _color_as_hex_or_hsv(color: string): string { throw new Error('Method not implemented: _color_as_hex_or_hsv'); }
  protected _graphviz_remap_align(value: string): string { throw new Error('Method not implemented: _graphviz_remap_align'); }
  protected _graphviz_remap_edge_minlen(value: string): string { throw new Error('Method not implemented: _graphviz_remap_edge_minlen'); }
  protected _graphviz_remap_edge_color(value: string): string { throw new Error('Method not implemented: _graphviz_remap_edge_color'); }
  protected _graphviz_remap_edge_style(value: string): string { throw new Error('Method not implemented: _graphviz_remap_edge_style'); }
  protected _graphviz_remap_node_rotate(value: string): string { throw new Error('Method not implemented: _graphviz_remap_node_rotate'); }
  protected _graphviz_remap_port(value: string): string { throw new Error('Method not implemented: _graphviz_remap_port'); }
  protected _graphviz_remap_font(value: string): string { throw new Error('Method not implemented: _graphviz_remap_font'); }
  protected _graphviz_remap_fontsize(value: string): string { throw new Error('Method not implemented: _graphviz_remap_fontsize'); }
  protected _graphviz_remap_border_style(value: string): string { throw new Error('Method not implemented: _graphviz_remap_border_style'); }
  protected _graphviz_remap_link(value: string): string { throw new Error('Method not implemented: _graphviz_remap_link'); }
  protected _graphviz_remap_label_color(value: string): string { throw new Error('Method not implemented: _graphviz_remap_label_color'); }
  protected _graphviz_remap_node_shape(value: string): string { throw new Error('Method not implemented: _graphviz_remap_node_shape'); }
  protected _graphviz_remap_arrow_style(value: string): string { throw new Error('Method not implemented: _graphviz_remap_arrow_style'); }
  protected _graphviz_remap_label(value: string): string { throw new Error('Method not implemented: _graphviz_remap_label'); }
  protected _att_as_graphviz(attrs: Record<string, any>): string { throw new Error('Method not implemented: _att_as_graphviz'); }
  protected _generate_group_edge(group: any): string { throw new Error('Method not implemented: _generate_group_edge'); }
  protected _insert_edge_attribute(attrs: Record<string, any>, name: string, value: any): void { throw new Error('Method not implemented: _insert_edge_attribute'); }
  protected _suppress_edge_attribute(name: string): boolean { throw new Error('Method not implemented: _suppress_edge_attribute'); }
  protected _generate_edge(edge: any): string { throw new Error('Method not implemented: _generate_edge'); }
  protected _order_group(group: any): void { throw new Error('Method not implemented: _order_group'); }
  protected _as_graphviz_group(group: any): string { throw new Error('Method not implemented: _as_graphviz_group'); }
  protected _as_graphviz(): string { throw new Error('Method not implemented: _as_graphviz'); }
  attributes_as_graphviz(attrs: Record<string, any>): string { throw new Error('Method not implemented: attributes_as_graphviz'); }
  protected _html_like_label(label: string): string { throw new Error('Method not implemented: _html_like_label'); }
  protected _graphviz_point(point: string): string { throw new Error('Method not implemented: _graphviz_point'); }
  as_graphviz_txt(): string { throw new Error('Method not implemented: as_graphviz_txt'); }
}
