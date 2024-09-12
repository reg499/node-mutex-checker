#include <node.h>
#include <windows.h>

void CheckMutex(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();
    v8::String::Utf8Value mutexName(isolate, args[0]);
    HANDLE hMutex = OpenMutex(SYNCHRONIZE, FALSE, *mutexName);

    if (hMutex) {
        CloseHandle(hMutex);
        args.GetReturnValue().Set(v8::Boolean::New(isolate, true));
    } else {
        args.GetReturnValue().Set(v8::Boolean::New(isolate, false));
    }
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "checkMutex", CheckMutex);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
