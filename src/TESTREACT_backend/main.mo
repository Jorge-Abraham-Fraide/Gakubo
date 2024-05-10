import Types "Types";
import Cycles "mo:base/ExperimentalCycles";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Nat "mo:base/Nat";

actor {
  let ic : Types.IC = actor "aaaaa-aa"; // Management Canister ID

  public type Deteccion = {
    clase : Text;
    objetos_detectados : Nat;
    fecha : Text;
    camara : Text;
  };

  public func fetchDeteccionesData() : async Text {
    let url : Text = "https://9494-190-217-57-66.ngrok-free.app/ultimo_json"; // Update to the local API endpoint
    let request_headers = [
      { name = "Host"; value = "9494-190-217-57-66.ngrok-free.app" },
      { name = "User-Agent"; value = "Motoko HTTP Agent" },
    ];
    let http_request : Types.HttpRequestArgs = {
      url = url;
      max_response_bytes = null;
      headers = request_headers;
      body = null;
      method = #get;
      transform = null;
    };
    Cycles.add(20_949_972_000); // Update cycle costs as needed
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);
    let response_body : Blob = Blob.fromArray(http_response.body);
    let decoded_text : Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?text) { text };
    };
    return decoded_text;
  };

  public func sendDeteccionData(deteccion : Deteccion) : async Text {
    let deteccionJson : Text = encodeDeteccionJson(deteccion);
    let url : Text = "https://9494-190-217-57-66.ngrok-free.app/ultimo_json"; // Update to the local API endpoint
    let bodyBytesBlob = Text.encodeUtf8(deteccionJson);
    let bodyBytes = Blob.toArray(bodyBytesBlob);
    let request_headers = [
      { name = "Host"; value = "9494-190-217-57-66.ngrok-free.app" },
      { name = "Content-Type"; value = "application/json" },
    ];
    let http_request : Types.HttpRequestArgs = {
      url = url;
      max_response_bytes = null;
      headers = request_headers;
      body = ?bodyBytes;
      method = #post;
      transform = null;
    };
    Cycles.add(1_000_000_000_000); // Update cycle costs as needed
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);
    let response_body : Blob = Blob.fromArray(http_response.body);
    let decoded_text : Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?text) { text };
    };
    return decoded_text;
  };

  private func encodeDeteccionJson(deteccion : Types.Deteccion) : Text {
    "{\"clase\": \"" # deteccion.clase #
    "\", \"objetos_detectados\": " # Nat.toText(deteccion.objetos_detectados) #
    ", \"fecha\": \"" # deteccion.fecha #
    "\", \"camara\": \"" # deteccion.camara # "\"}";
  };
};
