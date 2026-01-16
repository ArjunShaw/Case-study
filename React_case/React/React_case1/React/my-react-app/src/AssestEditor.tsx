import React from "react";
interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
};
interface AssetFormProps { onUpdate: (asset: Asset) => void; }
interface AssetFormState { name: string; symbol: string; value: string; change: string; }
class AsssestEditor extends React.Component<AssetFormProps,AssetFormState>{

        state:AssetFormState={
            name:'',
            symbol:'',
            value:'',
            change:''
        }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<AssetFormState, keyof AssetFormState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.onUpdate({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change)
    });
    this.setState({ name: '', symbol: '', value: '', change: '' });

}
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display:"flex",flexDirection:"column", gap:"20px"}}>
        <input name="name" value={this.state.name} onChange={this.handleChange} />
        <input name="symbol" value={this.state.symbol} onChange={this.handleChange} />
        <input name="value" value={this.state.value} onChange={this.handleChange} type="number" />
        <input name="change" value={this.state.change} onChange={this.handleChange} type="number" />
        <button type="submit">Update Assest</button>
      </form>
    );
  }
}

export default AsssestEditor