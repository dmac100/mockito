defineStructure(
"OngoingStubbing",function(factory){with(factory) { typeTable(["org.mockito.Mockito","cl"],["org.mockito.internal.progress.OngoingStubbing","it"],["org.mockito.internal.MockHandler$OngoingStubbingImpl","cl"],["java.lang.Object","cl"],["java.lang.Throwable","cl"]),methodTable([1,"toReturn",[3],"me"],[2,"toReturn",[3],"me"],[1,"toThrow",[4],"me"],[2,"toThrow",[4],"me"]),localVariableTable(["value","toReturn(java.lang.Object)-value"],["throwable","toThrow(java.lang.Throwable)-throwable"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.progress;",nl,nl,ip," org.mockito.",T(0),";",nl,nl,O("/**",nl," * Stubs with return value or exception. E.g:",nl," * ",nl," * &lt;pre>",nl," * stub(mock.someMethod()).toReturn(10);",nl," * ",nl," * //you can use flexible argument matchers, e.g:",nl," * stub(mock.someMethod(&lt;b>anyString()&lt;/b>)).toReturn(10);",nl," * ",nl," * //setting exception to be thrown:",nl," * stub(mock.someMethod(\"some arg\")).toThrow(new RuntimeException());",nl," * &lt;/pre>",nl," * ",nl," * See examples in javadoc for {@link Mockito#stub}",nl," */"),nl,C(1,[2],$(pu,_,it,_,I("OngoingStubbing"),"&lt;T> ",B(nl,nl,w(4),O("/**",nl,w(5),"* Stub mock object with given return value. E.g:",nl,w(5),"* &lt;pre>",nl,w(5),"* stub(mock.someMethod()).toReturn(10);",nl,w(5),"* &lt;/pre>",nl,w(5),"* ",nl,w(5),"* See examples in javadoc for {@link Mockito#stub}",nl,w(5),"* ",nl,w(5),"* @param value return value",nl,w(5),"*/"),nl,w(4),M(0,[],[1],$(v,_,I("toReturn"),P(V(0,$("T ",I("value")))),";")),nl,nl,w(4),O("/**",nl,w(5),"* Stub mock object with throwable that will be thrown on method invocation. E.g:",nl,w(5),"* &lt;pre>",nl,w(5),"* stub(mock.someMethod()).toThrow(new RuntimeException());",nl,w(5),"* &lt;/pre>",nl,w(5),"*",nl,w(5),"* If throwable is a checked exception then it has to ",nl,w(5),"* match one of the checked exceptions of method signature.",nl,w(5),"* ",nl,w(5),"* See examples in javadoc for {@link Mockito#stub}",nl,w(5),"* ",nl,w(5),"* @param throwable to be thrown on method invocation",nl,w(5),"*/"),nl,w(4),M(2,[],[3],$(v,_,I("toThrow"),P(V(1,$(T(4),_,I("throwable")))),";")),nl))));}});